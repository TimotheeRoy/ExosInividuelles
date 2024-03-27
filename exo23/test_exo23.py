import unittest
from exo23 import placeRandomBombe, gridGenerator, case

class TestGridGenerator(unittest.TestCase):
    def test_grid_size(self):
        grid = gridGenerator(5,10, 0)
        
        self.assertEqual(len(grid), 5)
        self.assertEqual(len(grid[0]), 10)

        self.assertNotEqual(len(grid),10)
        self.assertNotEqual(len(grid[0]),5)

        self.assertNotEqual(len(grid),8)
        self.assertNotEqual(len(grid[0]),4)

    def test_grid_content(self):
        grid = gridGenerator(5,10, 0)
        playerGrid = gridGenerator(5,10,'-')        
        flatGrid = sum([line for line in grid],[])
        flatGridPlayer = sum([line for line in playerGrid],[])
        
        self.assertTrue(set(flatGrid) == {0} )
        self.assertTrue(set(flatGridPlayer) == {'-'} )

class TestBombsPlacement(unittest.TestCase):
    def test_placeRandomBombs(self):
        grid = gridGenerator(4,4,0)
        placeRandomBombe(1,4,4,grid)
        flatGrid = sum([line for line in grid],[])
        self.assertTrue('X' in flatGrid)

    def test_numbers_of_bombs(self):
        grid = gridGenerator(4,4,0)
        flatGrid = sum([line for line in grid],[])
        self.assertTrue(len(list(filter(lambda e: e == 'X', flatGrid))) == 0)
        placeRandomBombe(2,4,4,grid)
        flatGrid = sum([line for line in grid],[])
        self.assertTrue(len(list(filter(lambda e: e == 'X', flatGrid))) == 2)
        
    def test_number_of_bombs_by_case(self):
        grid = gridGenerator(4,4,0)
        flatGrid = sum([line for line in grid],[])
        placeRandomBombe(8,4,4,grid)
        self.assertEqual(len(list(filter(lambda e : e == 'X' or e == 0, flatGrid))), len(flatGrid))

class TestCase(unittest.TestCase):
    def test_non_integer_inputs(self):
        grid = gridGenerator(4, 4, 0)
        playerGrid = gridGenerator(4, 4, "-")
        with self.assertRaises(ValueError):
            case("4", "a", grid, playerGrid)

    def test_out_of_grid(self):
        grid = gridGenerator(4, 4, 0)
        playerGrid = gridGenerator(4, 4, "-")
        with self.assertRaises(IndexError):
            case("4", "5", grid, playerGrid)
        with self.assertRaises(IndexError):
            case("5", "4", grid, playerGrid)

    def test_valid_coordinates(self):
        grid = gridGenerator(4, 4, 0)
        playerGrid = gridGenerator(4, 4, "-")
        case("2", "2", grid, playerGrid)


if __name__ == '__main__' :
    unittest.main()